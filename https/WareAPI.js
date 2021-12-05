import {$authHost, $host} from "./index";

// export const fetchWares = async (typeId, brandId,countsId) => {
//
//     try {
//         console.log(countsId)
//         const response = await fetch(`https://neutrino-study.site:5000/api/ware?countsId=${countsId}` );
//         console.log('ЗАпрос был')
//         const json = await response.json();
//         return json
//     } catch (error) {
//         console.error(error);
//     }
// };
export const fetchWares = async (typeId, brandId, countsId)=>{
    try {
        const {data} = await $host.get('api/ware', {params:{typeId, brandId, countsId: countsId}});

        return data;
    } catch (e) {
        console.log(e);
    }

};
export const fetchBanner = async ()=>{
    try {
        const {data} = await $host.get('api/banner');

        return data;
    } catch (e) {
        console.log(e);
    }

};
export const  fetchTypes = async () =>{
    const {data, value} = await $host.get('api/type');
    return data;
};
export const  fetchBrands = async () =>{
    const {data} = await $host.get('api/brand');
    return data;
};

export const searchWare = async ()=>{
    const {data} = await $authHost.get('api/ware/search');
    console.log(data)
    return data;
};
export const addToCart = async (wareId,counts, userId, size)=>{
    try {
        console.log('addToCart');
        console.log(wareId, userId);
        console.log(counts + '/' + wareId + '/' + userId)
        const {data} = await $authHost.get('api/cart/', {params: {wareId: wareId, counts:counts, userId: userId, size: size}});
        return data
    } catch (e) {

        console.log(e);
        return
    }

}
export const fetchBasketWare = async (userId)=>{
    try {
        console.log(userId);
        console.log('dataBasket');
        const {data} = await $host.post('api/cart', {userId: userId});
        let t = [];
        data.map((item)=>{ item.count = 1;})
        data.map((item, index)=>{
            for (let i = index + 1; i < data.length; i++) {
                if (item.id == data[i].id) {
                    item.count++;
                    data.splice(i ,1)
                    i--;
                }

            }
        })

        console.log(data);
        console.log('dataBasket');
        return data
    } catch (e) {
        console.log(e);
        return
    }

};
export const fetchOneWare = async (id) => {
    console.log('aaaa');
    const {data} = await $host.get('api/ware/' + id)

    return data
}
export const purchase = async (formData) => {
    const {data} = await $host.post('api/purchase', formData);
    return data
}

export const testPromo = async (promo) => {
    const {data} = await $host.get('api/promo', {params: promo});
    console.log(data)
    return data
}
export const pochtaRus = async (ind) => {
    const {data} = await $pochta.get('api/pochta/RUS', {params: { to: ind}});
    console.log(data);
    return data
}
export const pochtaCDEK = async () => {
    const {data} = await $pochta.get('api/pochta/CDEK',);

    return data
}
export const pochtaCDEKCities = async (regionCode) => {
    const {data} = await $pochta.get('api/pochta/CDEK/city', {params: {regionCode: regionCode}});

    return data
}
export const pochtaCDEKPrice = async (cityCode) => {

    const {data} = await $pochta.get('api/pochta/CDEK/price', {params: {cityCode: cityCode}});
    console.log(data);
    let body = JSON.parse(data.body);
    console.log(body);
    return body
}
