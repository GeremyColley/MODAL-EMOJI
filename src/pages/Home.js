import React, { useState } from "react";
import "../App.css";
import emojiList from "../assets/emojiList.json";
import Search from "../components/Search";

import ModalSearch from "../components/ModalSearch";

const Home = () => {
    const [results, setResults] = useState(emojiList.slice(0, 20));
    const [visibleModal, setVisibleModal] = useState(false);

    // fonction qui va être appelée à chaque changement dans l'input
    const searchResult = (event) => {
        let newResults = [];
        if(event.target.value.length>2){
            for (let i = 0; i < emojiList.length; i++) {
                if (
                    emojiList[i].keywords.indexOf(event.target.value.toLowerCase()) !== -1
                ) {
                    if (newResults.length >= 20) {
                    break;
                    } else {
                        newResults.push(emojiList[i]);
                    }
                }
            }
            setVisibleModal(true);
        } else {
            setVisibleModal(false);
        }
        setResults(newResults);
    };
    return (
        <div className="container">
            <Search searchResult={searchResult} />
            {visibleModal && <ModalSearch setVisible={setVisibleModal} results={results} />}


            
        </div>
    );
};

export default Home;