import { $host, $authHost } from ".";

export const createCategory = async (category) => {
  const { data } = await $authHost.post("api/category", category);

  return data;
};

export const fetchCategory = async () => {
  const { data } = await $host.get("api/category");

  return data;
};

export const createBrand = async (brand) => {
  const { data } = await $authHost.post("api/brand", brand);

  return data;
};

export const fetchBrand = async () => {
  const { data } = await $host.get("api/brand");

  return data;
};

export const createProduct = async (product) => {
  const { data } = await $authHost.post("api/product", product);

  return data;
};

export const fetchProducts = async () => {
  const { data } = await $host.get("api/product");
  return data.rows.map((item) => {
    return { ...item, img: `${process.env.REACT_APP_API_URL}/${item.img}` };
  });
};

export const fetchOneProduct = async (id) => {
  const { data } = await $host.get("api/product/" + id);

  return data;
};
