import { useParams } from "react-router-dom"
import services from "../Data/ServiceData.js"

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) return <h2 className="text-white text-center">Service Not Found</h2>

  return (
    <div className="p-6 text-white pt-32 px-28">
      {/* Title */}
      <h1 className="text-3xl font-bold">{service.title}</h1>

      {/* Image */}
      <img
        src={service.img}
        alt={service.title}
        className="w-full max-h-[400px] object-cover rounded-lg mt-4"
      />

      {/* Short detail */}
      <p className="mt-6 text-gray-300">{service.details}</p>

      {/* Extra Details Section */}
      <div className="mt-10 space-y-6 text-gray-400 leading-relaxed">
        <p>
          Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales,
          blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur
          adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel
          placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do.
        </p>

        <p>
          Sed ut perspiciatis unde omnis iste natus et Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet.
        </p>

        <p>
          Aliquam laoreet sed neque ac vehicula. Cras congue eros nec quam laoreet, in viverra erat bibendum. Cras
          turpis urna, vulputate at est vitae, posuere lobortis erat.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>

        <p>
          <strong>Aliquam quis lobortis quam</strong> — Curabitur pellentesque odio magna, id malesuada arcu sodales ut.
          Sed sed quam ut ex bibendum commodo id id magna. Aliquam sed ligula sed ante blandit volutpat. Ut bibendum,
          nisi et mattis vulputate, odio arcu aliquet metus, nec dapibus risus risus quis lectus.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  )
}
