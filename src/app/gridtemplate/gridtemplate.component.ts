import { Component, Injectable, OnInit } from '@angular/core';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

/** Flat node with expandable and level information */
export class DynamicFlatNode {
  constructor(public item: string, public level = 1, public expandable = false,
    public isLoading = false) { }
}

/**
 * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
 * the descendants data from the database.
 */
export class DynamicDatabase {
  dataMap = new Map<string, string[]>([
    ['Fruits', ['Apple', 'Orange', 'Banana']],
    ['Vegetables', ['Tomato', 'Potato', 'Onion']],
    ['Apple', ['Fuji', 'Macintosh']],
    ['Onion', ['Yellow', 'White', 'Purple']]
  ]);

  rootLevelNodes: string[] = ['Fruits', 'Vegetables'];

  /** Initial data from database */
  initialData(): DynamicFlatNode[] {
    return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
  }

  getChildren(node: string): string[] | undefined {
    return this.dataMap.get(node);
  }

  isExpandable(node: string): boolean {
    return this.dataMap.has(node);
  }
}
/**
 * File database, it can build a tree structured Json object from string.
 * Each node in Json object represents a file or a directory. For a file, it has filename and type.
 * For a directory, it has filename and children (a list of files or directories).
 * The input will be a json object string, and the output is a list of `FileNode` with nested
 * structure.
 */
@Injectable()
export class DynamicDataSource {

  dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);

  get data(): DynamicFlatNode[] { return this.dataChange.value; }
  set data(value: DynamicFlatNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  constructor(private _treeControl: FlatTreeControl<DynamicFlatNode>,
    private _database: DynamicDatabase) { }

  connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
    this._treeControl.expansionModel.onChange.subscribe(change => {
      if ((change as SelectionChange<DynamicFlatNode>).added ||
        (change as SelectionChange<DynamicFlatNode>).removed) {
        this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
      }
    });

    return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(node => this.toggleNode(node, false));
    }
  }

  /**
   * Toggle the node, remove from display list
   */
  toggleNode(node: DynamicFlatNode, expand: boolean) {
    const children = this._database.getChildren(node.item);
    const index = this.data.indexOf(node);
    if (!children || index < 0) { // If no children, or cannot find the node, no op
      return;
    }

    node.isLoading = true;

    setTimeout(() => {
      if (expand) {
        const nodes = children.map(name =>
          new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)));
        this.data.splice(index + 1, 0, ...nodes);
      } else {
        let count = 0;
        for (let i = index + 1; i < this.data.length
          && this.data[i].level > node.level; i++ , count++) { }
        this.data.splice(index + 1, count);
      }

      // notify the change
      this.dataChange.next(this.data);
      node.isLoading = false;
    }, 1000);
  }
}
@Component({
  selector: 'app-gridtemplate',
  templateUrl: './gridtemplate.component.html',
  styleUrls: ['./gridtemplate.component.scss'],
  providers: [DynamicDatabase]
})
export class GridtemplateComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  mangHocVien: Array<any> = [
    { MaHV: 1, TenHocVien: "Nguyễn Trần Trung Quân", MaLop: 1 },
    { MaHV: 2, TenHocVien: "Hồ Quang Hiếu", MaLop: 1 },
    { MaHV: 3, TenHocVien: "Phạm Quỳnh Anh", MaLop: 1 },
    { MaHV: 4, TenHocVien: "Đặng Trung Hiếu", MaLop: 1 },
    { MaHV: 5, TenHocVien: "Lê Minh Long", MaLop: 1 },
    { MaHV: 6, TenHocVien: "Dương Hải Thái", MaLop: 2 },
    { MaHV: 7, TenHocVien: "Châu Ái My", MaLop: 2 },
    { MaHV: 8, TenHocVien: "Đàm Thu Trang", MaLop: 2 },
    { MaHV: 9, TenHocVien: "Lê Quang Minh", MaLop: 2 },
    { MaHV: 10, TenHocVien: "Phạm Công Trí", MaLop: 2 },
    { MaHV: 11, TenHocVien: "Huỳnh Tuấn Anh", MaLop: 3 },
    { MaHV: 12, TenHocVien: "Phạm Tấn Trường", MaLop: 3 },
    { MaHV: 13, TenHocVien: "Trịnh Minh Triết", MaLop: 3 },
    { MaHV: 14, TenHocVien: "Liễu Thanh Thanh", MaLop: 3 },
    { MaHV: 15, TenHocVien: "Thiều Ngọc Anh", MaLop: 3 },
    { MaHV: 16, TenHocVien: "Trương Ngọc Băng Di", MaLop: 4 },
    { MaHV: 17, TenHocVien: "Trần Thiệu Tường", MaLop: 4 },
    { MaHV: 18, TenHocVien: "Phạm Đức Thắng", MaLop: 4 },
    { MaHV: 19, TenHocVien: "Trần Hồng Minh", MaLop: 4 },
    { MaHV: 20, TenHocVien: "Thái Phương Châu", MaLop: 4 },]
  mangLopHoc: Array<any> = [
    { MaLop: 1, TenLop: "cybersoft" },
    { MaLop: 2, TenLop: "myclass" },
    { MaLop: 3, TenLop: "FrontEnd" },
    { MaLop: 4, TenLop: "FullStack" }];
  constructor(database: DynamicDatabase) {
    this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new DynamicDataSource(this.treeControl, database);

    this.dataSource.data = database.initialData();
  }
  treeControl: FlatTreeControl<DynamicFlatNode>;

  dataSource: DynamicDataSource;

  getLevel = (node: DynamicFlatNode) => node.level;

  isExpandable = (node: DynamicFlatNode) => node.expandable;

  hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

  ngOnInit() {
  }

}



