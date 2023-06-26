import { pageContent } from "./index.js";
export function menuPage() {
    pageContent.innerHTML = `    
    <h1>Our Menu</h1>
    <h2>Drinks</h2>
    <ul>
        <li>Beer</li>
        <li>Coffee</li>
        <li>Soft Drinks</li>
        <li>Tea</li>
    </ul>
    <h2>By The Slice</h2>
    <ul>
        <li>Pepperoni</li>
        <li>Cheese</li>
        <li>Supreme</li>
        <li>Spinach & Garlic</li>
    </ul>
    `;
}