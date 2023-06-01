import React from 'react';
import {Navbar} from "../components/Navbar";
import Author from "../components/Author";
import ShowMusicLine from "../logic/ShowMusicLine";
const Authors = () => {
    return (
        <div>
                <section className="flex flex-row flex-wrap mx-auto mb-10">
                    <Author/>
                    <Author/>
                    <Author/>
                    <Author/>
                    <Author/>
                    <Author/>
                    <Author/>
                    <Author/>
                    <Author/>
                    <Author/>
                </section>
            <ShowMusicLine/>
        </div>
    );
};

export default Authors;