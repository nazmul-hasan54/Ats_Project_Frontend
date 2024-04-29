import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BlogComponent } from './Components/blog/blog.component';
import { SingleBlogComponent } from './Components/single-blog/single-blog.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blogs', component: BlogComponent},
    {path: 'single-blog/:id', component: SingleBlogComponent}
];
