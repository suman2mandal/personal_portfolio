import React from 'react';

function BlogFooter(props:any) {
    return (
        <>
            {/* component */}
            <div className="rounded-lg px-6 py-4 text-sm dark:bg-gray-800 bg-gray-900 text-gray-100 relative overflow-hidden px-8 py-6 mt-12">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <h5 className="forge-h5 text-gray-100">Application</h5>
                    </div>
                </div>
                <div className="py-2">
                    <svg
                        width={314}
                        height={214}
                        viewBox="0 0 314 214"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 top-0"
                    >
                        <path
                            d="M174.5 6V-23.5L233 36H204.5C187.931 36 174.5 22.5685 174.5 6Z"
                            fill="#465467"
                        />
                        <path
                            d="M174.5 6V-23.5L116 36H144.5C161.069 36 174.5 22.5685 174.5 6Z"
                            fill="#151E2C"
                        />
                        <path
                            d="M116.5 65.5V36L175 95.5H146.5C129.931 95.5 116.5 82.0685 116.5 65.5Z"
                            fill="#465467"
                        />
                        <path
                            d="M116.5 65.5V36L58 95.5H86.5C103.069 95.5 116.5 82.0685 116.5 65.5Z"
                            fill="#2F3B4B"
                        />
                        <path
                            d="M59.5 125V95.5L118 155H89.5C72.9315 155 59.5 141.569 59.5 125Z"
                            fill="#151E2C"
                        />
                        <path
                            d="M59.5 125V95.5L1.00003 155H29.5C46.0686 155 59.5 141.569 59.5 125Z"
                            fill="#2F3B4B"
                        />
                        <path
                            d="M58.5 184.5L58.5 214L-5.20166e-06 154.5L28.5 154.5C45.0685 154.5 58.5 167.931 58.5 184.5Z"
                            fill="#151E2C"
                        />
                        <path
                            d="M58.5 184.5L58.5 214L117 154.5L88.5 154.5C71.9315 154.5 58.5 167.931 58.5 184.5Z"
                            fill="#2F3B4B"
                        />
                        <path
                            d="M174.5 125V95.5L233 155H204.5C187.931 155 174.5 141.569 174.5 125Z"
                            fill="#151E2C"
                        />
                        <path
                            d="M174.5 125V95.5L116 155H144.5C161.069 155 174.5 141.569 174.5 125Z"
                            fill="#2F3B4B"
                        />
                        <path
                            d="M173.5 184.5L173.5 214L115 154.5L143.5 154.5C160.069 154.5 173.5 167.931 173.5 184.5Z"
                            fill="#151E2C"
                        />
                        <path
                            d="M173.5 184.5L173.5 214L232 154.5L203.5 154.5C186.931 154.5 173.5 167.931 173.5 184.5Z"
                            fill="#2F3B4B"
                        />
                        <path
                            d="M289.5 125V95.5L348 155H319.5C302.931 155 289.5 141.569 289.5 125Z"
                            fill="#151E2C"
                        />
                        <path
                            d="M289.5 125V95.5L231 155H259.5C276.069 155 289.5 141.569 289.5 125Z"
                            fill="#2F3B4B"
                        />
                        <path
                            d="M288.5 184.5L288.5 214L230 154.5L258.5 154.5C275.069 154.5 288.5 167.931 288.5 184.5Z"
                            fill="#151E2C"
                        />
                        <path
                            d="M288.5 184.5L288.5 214L347 154.5L318.5 154.5C301.931 154.5 288.5 167.931 288.5 184.5Z"
                            fill="#2F3B4B"
                        />
                        <path
                            d="M286.5 6V-23.5L345 36H316.5C299.931 36 286.5 22.5685 286.5 6Z"
                            fill="#465467"
                        />
                        <path
                            d="M286.5 6V-23.5L228 36H256.5C273.069 36 286.5 22.5685 286.5 6Z"
                            fill="#2F3B4B"
                        />
                        <path
                            d="M346.5 66.5V37L288 96.5H316.5C333.069 96.5 346.5 83.0685 346.5 66.5Z"
                            fill="#2F3B4B"
                        />
                        <g opacity="0.34">
                            <path
                                d="M233 65.5V36L291.5 95.5H263C246.431 95.5 233 82.0685 233 65.5Z"
                                fill="#465467"
                            />
                            <path
                                d="M233 65.5V36L174.5 95.5H203C219.569 95.5 233 82.0685 233 65.5Z"
                                fill="#2F3B4B"
                            />
                        </g>
                    </svg>
                    <a
                        className="flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-6 w-6"
                        >
                            <path
                                d="M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"
                                fill="currentColor"
                            />
                        </svg>{" "}
                        username/repo-name{" "}
                    </a>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-normal text-gray-800 dark:text-gray-400 !text-gray-300 dark:!text-gray-400">
                                <span className="flex items-center gap-x-2">HTTPS</span>
                            </label>
                            <div className="mt-1 flex flex-col">Enabled</div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-normal text-gray-800 dark:text-gray-400 !text-gray-300 dark:!text-gray-400">
                                <span className="flex items-center gap-x-2">PHP Version</span>
                            </label>
                            <div className="mt-1 flex flex-col">PHP 8.1</div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-normal text-gray-800 dark:text-gray-400 !text-gray-300 dark:!text-gray-400">
                                <span className="flex items-center gap-x-2">Quick Deploy</span>
                            </label>
                            <div className="mt-1 flex flex-col">Disabled</div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-normal text-gray-800 dark:text-gray-400 !text-gray-300 dark:!text-gray-400">
            <span className="flex items-center gap-x-2">
              Envoyer Integration
            </span>
                            </label>
                            <div className="mt-1 flex flex-col">Disabled</div>
                        </div>
                        <div className="z-20 flex flex-col">
                            <label className="text-sm font-normal text-gray-800 dark:text-gray-400 !text-gray-300 dark:!text-gray-400">
                                <span className="flex items-center gap-x-2">Web Directory</span>
                            </label>
                            <div className="mt-1 max-w-sm break-all">
                                /home/forge/your-website.com/public
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-normal text-gray-800 dark:text-gray-400 !text-gray-300 dark:!text-gray-400">
                                <span className="flex items-center gap-x-2">Last Deployed</span>
                            </label>
                            <div className="mt-1 flex flex-col">Dec 15, 2021, 5:34 PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogFooter;