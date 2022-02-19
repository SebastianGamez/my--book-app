export const showMenu = (classShowMenu, rotateMenuImage, setClassShowMenu, setRotateMenuImage) => {

    const classMenu = (classShowMenu === "menu-nav--container") ? "menu-nav--active" : "menu-nav--container";
    const classMenuImage = (rotateMenuImage === "button__image") ? "button__image button__image--selected" : "button__image";

    setRotateMenuImage(classMenuImage);
    setClassShowMenu(classMenu);

}