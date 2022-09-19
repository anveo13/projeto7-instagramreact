import Stories from "./Stories";
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import Mobile from "./Mobile";

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <div class="stories">
                    <Stories />
                </div>

                <div class="posts">
                    <Posts />
                </div>
            </div>
            <div class="sidebar">
                <Sidebar />
            </div>


            <div>
                <Mobile />
            </div>
        </div>
    )
}
