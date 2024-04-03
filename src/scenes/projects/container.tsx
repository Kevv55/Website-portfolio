import { motion } from 'framer-motion'

type Props = {
    image: string,
    title: string,
    description: string,
    path: string
}

const Container = ({image, title, description, path}: Props) => {
  return (
    <motion.div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center w-1/3 mx-auto">
        <div className="mb-4 flex justify-center flex">
            <div>
                <a href={path}>
            <img src={image} alt={`${image}`} width={250} height={200}/>
            </a>
            </div>
        </div>

        <h4 className="font-bold">{title}</h4>
        <p className="my-3">{description}</p>
        <p>
            <a className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" href={path}>
                Link to Project
            </a>
        </p>
    </motion.div>
  )
}

export default Container;