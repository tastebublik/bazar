import React from 'react';



const Author = () => {
    return (
        <div className="transition-all duration-150 flex w-full px-4 py-12 md:w-1/2 lg:w-1/3">
            <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
                <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
                     src="https://avatars.githubusercontent.com/u/67946056?v=4" alt=""/>
                <div className="text-center mt-2 text-3xl font-medium">Ajo Alex</div>
                <div className="text-center mt-2 font-light text-sm">@devpenzil</div>
                <div className="text-center font-normal text-lg">Kerala</div>
                <div className="px-6 text-center mt-2 font-light text-sm">
                    <p>
                        Front end Developer, avid reader. Love to take a long walk, swim
                    </p>
                </div>
                <hr className="mt-8"/>
                <div className="flex p-4">
                    <div className="w-1/2 text-center">
                        <span className="font-bold">1.8 k</span> Followers
                    </div>
                    <div className="w-0 border border-gray-300">

                    </div>
                    <div className="w-1/2 text-center">
                        <span className="font-bold">2.0 k</span> Following
                    </div>
                </div>

            </div>
        </div>

    );
};



const ExampleAuthors = () => {
    return (
        <section className="flex flex-row flex-wrap mx-auto">
     <Author></Author>
     <Author></Author>
     <Author></Author>
     <Author></Author>
     <Author></Author>
     <Author></Author>
     <Author></Author>
     <Author></Author>
     <Author></Author>
     <Author></Author>
        </section>
    );
}

export default ExampleAuthors;