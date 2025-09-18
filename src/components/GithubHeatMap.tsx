import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export default function GithubHeatmap() {
    return (
        <section className="py-16 px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">GitHub Activity</h2>
            <div className="flex justify-center overflow-x-auto">
                <div className="scale-90 sm:scale-100 origin-top">
                    <GitHubCalendar
                        username="PrabhjotSinghUbhi"
                        blockSize={15}
                        blockMargin={5}
                        fontSize={16}
                        year={new Date().getFullYear()}
                    />
                </div>
            </div>
        </section>
    );
}
