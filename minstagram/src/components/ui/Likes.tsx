type Props = {
  likes: any[];
}

export default function Likes(props:Props) {

  const { likes } = props

  let likesResult = '';

  if(likes === undefined || likes === null) {
    likesResult = '0 Like'
  } else if (likes.length === 1){
    likesResult = '1 Like'
  } else {
    likesResult = `${likes.length} Likes`
  }

  return likesResult;
}
