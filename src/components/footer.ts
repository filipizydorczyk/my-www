export type FooterArgs = {
    photo: string;
};

const Footer = ({ photo }: FooterArgs) => {
    return /* HTML */ `<footer class="footer">
        <div class="footer__profile-picture-section">
            <img src="${photo}" />
        </div>
        <div class="footer__text-section"></div>
    </footer>`;
};

export default Footer;
