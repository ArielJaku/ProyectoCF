export interface Producto {
        id : number,
        title : number,
        description : string,
        category : string,
        price : number,
        discountPercentage : number,
        rating : number,
        stock : number,
        tags : string[],
        brand : string,
        sku : string,
        weight : number,
        dimensions : dimensions,
        warrantyInformation : string,
        shippingInformation : string,
        availabilityStatus : string,
        reviews : reviews[],
        returnPolicy : string,
        minimumOrderQuantity : number,
        meta : meta,
        images : string[],
        thumbnail : string
}

interface dimensions{
        width : number,
        height : number,
        depth : number
}

interface reviews{
        rating : number,
        comment : string,
        date : Date,
        reviewerName : string,
        reviewerEmail : string
}

interface meta{
        createdAt : Date,
        updatedAt : Date,
        barcode : string,
        qrCode : string
}