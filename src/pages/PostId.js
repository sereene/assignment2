import { useParams } from "react-router-dom";
import iconImg1 from '../../src/pages/page1.jpg';
import iconImg2 from '../../src/pages/page2.jpg';
import iconImg3 from '../../src/pages/page3.jpg';

const PostId = () => {
    const params = useParams();
    let imgSrc='';
    if (Number(params.postid) === 1){
         imgSrc=iconImg1;
    }
    if (Number(params.postid)=== 2){
        imgSrc=iconImg2;
    }
    if (Number(params.postid)=== 3){
        imgSrc=iconImg3;
    }
    return (
        <div>
            <img src={imgSrc} alt = "icon" width = {180} />
            <p> {params.postid} 번 포스팅을 보고 있습니다. </p>
        </div>
    );
}

export default PostId;