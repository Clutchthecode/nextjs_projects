
import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
const StartupCard = ({post}:{post: StartupTypeCard}) => {
    const {_createdAt,views,author:{_id:author_id,name},title,_id,image, description }=post;
  return (
    <li className="startup-card group">
         <div className="flex-between">
            <p className="startup_card_date">
                {formatDate(_createdAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-primary"/>
                <span className="text-16-medium">{views}</span>
            </div>
         </div>
         <div>
            <div>
                <Link href={`/users/${author_id}`}>
                <p className="text-16-medium line-clamp-1">{name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                <h3 className="text-26-semibold line-clamp-1">{title}</h3>
                </Link>
            </div>
            <Link href={`/users/${author_id}`}>
            <Image src="http://placehold.co/600x400" alt="placeholder"width={48}height={48} className="rounded">
            </Image>
            </Link>
         </div>
         <div>
            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">{description}</p>
                <img src={image} alt="placeholder" className="startup-card_img"/>
            </Link>
         </div>

    </li>
  )
}

export default StartupCard