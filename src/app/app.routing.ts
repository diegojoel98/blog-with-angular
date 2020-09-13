// Import modules routers
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components for pages
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormComponent } from './components/form/form.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PageComponent } from './components/page/page.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

// Routing array
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/article/:id', component: ArticleComponent},
    {path: 'blog/edit/:id', component: ArticleEditComponent},
    {path: 'blog/create', component: CreateArticleComponent},
    {path: 'search/:search', component: SearchComponent},
    {path: 'form', component: FormComponent},
    {path: 'movies', component: PeliculasComponent},
    {path: 'page', component: PageComponent},
    {path: 'page/:nombre/:apellido', component: PageComponent},
    {path: '**', component: ErrorComponent} // last path
];

// Export module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);