import Image from "next/image"

export function Profile() {

    return(
        <section className="relative mx-auto bg-gradient-to-b from-teal-501 rounded-full w-80 h-80 mt-20 overflow-hidden">
              <Image src="/profile.png" width={349} height={300} alt="me" />
        </section>
    ) 
}