import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Load(){
    return (
        <div className="h-screen fixed w-full bg-white top-0 left-0 flex justify-center items-center">
          <DotLottieReact
            className="w-100"
            src="loading.lottie"
            loop
            autoplay
          />
        </div>
    )
}