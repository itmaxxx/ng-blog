import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { RelatedPostComponent } from './related-post/related-post.component';
import { RelatedPostsComponent } from './related-posts/related-posts.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'contact-me', component: ContactMeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'post/:id', component: BlogPostComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    HomeComponent,
    BlogPostComponent,
    NotFoundComponent,
    NavBarComponent,
    FooterComponent,
    SliderComponent,
    AboutMeComponent,
    RelatedPostComponent,
    RelatedPostsComponent,
    ContactMeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
