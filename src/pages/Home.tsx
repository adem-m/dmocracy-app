import {Button} from "@mui/material";

export function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique sem id massa sollicitudin
                ullamcorper.
                Vivamus tristique varius posuere. Quisque porta eros lobortis egestas tincidunt. Proin dictum, mi ut
                ultrices
                sollicitudin, lectus purus euismod urna, a iaculis sem nisl suscipit nibh. Cras tortor ex, sagittis vel
                efficitur vel, aliquam a libero. Mauris porttitor enim sit amet ex vehicula ullamcorper. Nullam a nunc
                fermentum, accumsan nibh et, pellentesque risus. Sed eget mauris ipsum.
            </p>
            <Button className={"none"} href={"https://google.com"}>
                Download our white-paper !
            </Button>
        </>
    );
}

export default HomePage;