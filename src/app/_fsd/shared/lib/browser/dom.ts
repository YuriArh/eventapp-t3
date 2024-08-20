export const scrollToTop = () => {
  document
    .querySelector(".ant-layout-content")
    ?.scrollTo({ top: 0, behavior: "smooth" });
};
