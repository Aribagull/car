import { useParams } from "react-router-dom"
import services from "../Data/ServiceData.js"

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) return <h2 className="text-white text-center">Service Not Found</h2>

  return (
    <div className="bg-black min-h-screen px-28 pt-36 text-white">
      
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>

 
      <img
        src={service.img}
        alt={service.title}
        className="w-full max-h-[450px] object-cover rounded-xl shadow-lg"
      />

 
      <p className="mt-8 text-gray-300 leading-relaxed">
        Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula risus. Suspendisse id mauris sodales, blandit tortor eu, sodales justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing elit, sed do.
      </p>

 
      <div className="mt-12 space-y-12">
       
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Sed ut perspiciatis unde omnis iste natus et
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.Aliquam laoreet sed neque ac vehicula. Cras congue eros nec quam laoreet, in viverra erat bibendum. Cras turpis urna, vulputate at est vitae, posuere lobortis erat.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Aliquam laoreet sed neque ac vehicula. Cras congue eros nec quam laoreet, in
            viverra erat bibendum. Cras turpis urna, vulputate at est vitae, posuere
            lobortis erat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.Aliquam laoreet sed neque ac vehicula. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1656233542584-2601d0ae2398?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Service 1"
            className="rounded-xl object-cover w-full h-[350px]"
          />
          <img
            src="https://images.unsplash.com/photo-1594348557705-5c4c5c4e9b6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Service 2"
            className="rounded-xl object-cover w-full h-[350px]"
          />
        </div>
        <p className="text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.Aliquam laoreet sed neque ac vehicula. 
        </p>

    
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Aliquam quis lobortis quam
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Curabitur pellentesque odio magna, id malesuada arcu sodales ut. Sed sed quam ut
            ex bibendum commodo id id magna. Aliquam sed ligula sed ante blandit volutpat.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.Aliquam laoreet sed neque ac vehicula. 
          </p>
          <p className="text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum.Aliquam laoreet sed neque ac vehicula. 
          </p>
        </div>
      </div>
    </div>
  )
}
