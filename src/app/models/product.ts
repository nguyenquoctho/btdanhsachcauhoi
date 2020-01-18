export interface Iproduct{
    MaSP:number
    TenSP:string
    Gia:number
}
export interface ISeat{
    SoGhe:number;
    TenGhe:string;
    Gia:number;
    TrangThai:boolean
}
export class Product implements Iproduct{
    MaSP:number
    TenSP:string
    Gia:number
    constructor(maSP:number,tenSP:string,gia:number){
        this.MaSP=maSP
        this.TenSP=tenSP
        this.Gia=gia
    }
    
}