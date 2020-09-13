import Vue from "vue";
import Router from "vue-router";
import TopPage from "@/view/TopPage";
import SignUp from "@/view/SignUp";
import Introduction from "@/view/Introduction";
import Login from "@/view/Login";
import Follow from "@/view/Follow";
import CreatePlan from "@/view/CreatePlan";
import CreateMyData from "@/view/CreateMyData";
import EditProfile from "@/view/EditProfile";
import MyProfile from "@/view/MyProfile";
import Lesson from "@/view/Lesson";
import Specified from "@/view/Specified";
import Message from "@/view/Message";
import MessageList from "@/components/member/message/MessageList";
import CreateStudentPlan from "@/view/CreateStudentPlan";
import SearchResults from "@/view/SearchResults";
// import MyLessonList from "@/components/member/lesson/MyLessonList";
import MyFollowList from "@/components/member/follow/MyFollowList";



Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        //ルーティングの設定
        {
            path: '/',           //パスの設定
            component: TopPage,    //表示するコンポーネント
            name: 'index',       //ルートの名前を指定
        },
        {
            path: '/member/signup',           //パスの設定
            component:SignUp ,    //表示するコンポーネント
            name: 'memberSignUp',       //ルートの名前を指定
        },
        {
            path: '/member/introduction',           //パスの設定
            component:Introduction ,    //表示するコンポーネント
            name: 'memberIntroduction',       //ルートの名前を指定
        },
        {
            path: '/member/login',           //パスの設定
            component:Login ,    //表示するコンポーネント
            name: 'memberlogin',       //ルートの名前を指定
        },
    
        {
            path: '/member/follows/:id',           //パスの設定
            component:Follow ,    //表示するコンポーネント
            name: 'memberfollows',       //ルートの名前を指定
        },
        {
            path: '/member/createplan/:id',           //パスの設定
            component:CreatePlan ,    //表示するコンポーネント
            name: 'membercreateplan',       //ルートの名前を指定
        },
        {
            path: '/member/createmydata',           //パスの設定
            component:CreateMyData ,    //表示するコンポーネント
            name: 'membercreatemydata',       //ルートの名前を指定
        },
        {
            path: '/member/editprofile',           //パスの設定
            component:EditProfile ,    //表示するコンポーネント
            name: 'membereditprofile',       //ルートの名前を指定
        },
        
        {
            path: '/member/lesson',           //パスの設定
            component:Lesson ,    //表示するコンポーネント
            name: 'memberlesson',       //ルートの名前を指定
        },
        {
            path: '/member/specified',           //パスの設定
            component:Specified ,    //表示するコンポーネント
            name: 'memberspecified',       //ルートの名前を指定
        },
        {
            path: '/member/message/:id',           //パスの設定
            component:Message ,    //表示するコンポーネント
            name: 'membermessage',       //ルートの名前を指定
        },
        {
            path: '/member/profile/:id',           //パスの設定
            component:MyProfile ,    //表示するコンポーネント
            name: 'memberprofile',       //ルートの名前を指定
        },
        {
            path: '/member/message/list/:id',           //パスの設定
            component:MessageList ,    //表示するコンポーネント
            name: 'membermessagelist',       //ルートの名前を指定
        },
        {
            path: '/member/lesson/:id',           //パスの設定
            component:Lesson ,    //表示するコンポーネント
            name: 'memberlessonmylessonlist',       //ルートの名前を指定
        },
        {
            path: '/member/follow',           //パスの設定
            component:MyFollowList ,    //表示するコンポーネント
            name: 'memberfollowmyfollowlist',       //ルートの名前を指定
        },
        {
            path: '/member/createstudentplan/:id',           //パスの設定
            component:CreateStudentPlan ,    //表示するコンポーネント
            name: 'membercreatestudentplan',       //ルートの名前を指定
        },
        {
            path: '/member/searchresults/:id',           //パスの設定
            component:SearchResults ,    //表示するコンポーネント
            name: 'membersearchresults',       //ルートの名前を指定
        },
    ]
});