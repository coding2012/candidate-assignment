import Image from 'next/image'

export default function Example({ next }: { next: () => void }) {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        alt="Solace"
                        src="/solace.png"
                        width={100}
                        height={100}
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Looking for your Advocate!
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                    We will ask you a few questions to find the best advocate for you. Keep in mind your information is safe with us.

                    <div className="mt-5">
                        <button
                            type="submit"
                            onClick={next}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Let's Go!
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
