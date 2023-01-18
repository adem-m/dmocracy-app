import {Button} from "@mui/material";

export function HomePage() {
    return (
        <>
            <h1>Welcome</h1>
            <p>
                Democracy is one of the greatest mankind invention. It allows people to find an agreement in a peaceful way.
                However, crisis betrayals and lies have weakened our democracy. Fraud accusations and pools contestation become
                more and more frequents.
                At Democracy, we deeply believe that blockchain can provide tools to strenghten and reinvent our aging democracies
            </p>
            <Button className={"none"} href={"/white_paper.pdf"}>
                Read our white paper !
            </Button>
        </>
    );
}

export default HomePage;