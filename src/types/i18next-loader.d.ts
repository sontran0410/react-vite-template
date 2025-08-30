declare module "virtual:i18next-loader" {
  // Khai báo tối thiểu để import không lỗi
  const resources: import("i18next").Resource;
  export default resources;
}
