import * as React from "react";
import { Header } from "./Header";

export function MainScreen() {
    return (
        <stackLayout height="100%">
            <Header 
                vendorName="João Silva"
                vendorImage="https://i.pravatar.cc/150?img=68"
            />
        </stackLayout>
    );
}