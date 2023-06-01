import React from 'react';

const MusicLine = () => {
    return (

            <div className="sticky bottom-0 z-10 bg-white dark:bg-gray-800 rounded-tl-xl sm:rounded-t-xl p-4 pb-6 sm:p-8 lg:p-4 lg:pb-6 xl:p-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
                    <img src="https://fullstackradio.com//podcast-cover.jpg" alt="" width="160" height="160" className="flex-none w-20 h-20 rounded-lg bg-gray-100" />
                    <div className="min-w-0 flex-auto space-y-0.5">

                        <h2 className="text-black dark:text-white text-base sm:text-xl lg:text-base xl:text-xl font-semibold truncate">
                            Scaling CSS at Heroku with Utility Classes
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg lg:text-base xl:text-lg font-medium">
                            Full Stack Radio
                        </p>
                    </div>
                    {/*pause*/}
                    <button type="button" className="mx-auto">
                        <svg width="50" height="50" fill="none">
                            <circle className="" Name="text-gray-300 dark:text-gray-500" cx="25" cy="25" r="24"
                                    stroke="currentColor" stroke-width="1.5"/>
                            <path d="M18 16h4v18h-4V16zM28 16h4v18h-4z" fill="currentColor"/>
                        </svg>
                    </button>
                    {/*next podcast*/}
                    <button type="button" className="hidden sm:block lg:hidden xl:block mx-auto">
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path d="M17 0H15V18H17V0Z" fill="currentColor"/>
                            <path d="M13 9L0 0V18L13 9Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                <div className="space-y-2">
                    <div className="bg-gray-200 dark:bg-black rounded-full overflow-hidden">
                        <div className="bg-lime-500 dark:bg-lime-400 w-1/2 h-1.5" role="progressbar" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 flex justify-between text-sm font-medium tabular-nums">
                        <div>24:16</div>
                        <div>75:50</div>
                    </div>
                </div>
            </div>

    );
};

export default MusicLine;