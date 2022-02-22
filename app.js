import express from 'express';
import moviesController from './controllers/moviesController.js';
import data_movie from './share/data-movies.js'

const app = express();

app.use(express.json());

// Película con id:2 (1pto)
app.get('/movies/:id', (req,res)=>{
    const id = req.params.id
    data_movie.req = { id: id };
    moviesController.getMovieById(data_movie);
    res.send(data_movie.res)
})
// Eliminar la película con id:2 (1pto)
app.delete('/movies/:id', (req,res)=>{
    const id = req.params.id
    data_movie.req = { id: id };
    moviesController.removeMovie(data_movie)
    res.send(data_movie.res)
})
// Añade una nueva película new_movie
app.post('/movies/add', (req,res)=>{
    const movie_json = req.body
    data_movie.req = movie_json
    moviesController.createMovie(data_movie)
    res.send(data_movie.res)
})
// Modifica la película con id:3
app.put('/movies/update/:id',(req,res)=>{
    const id = req.params.id
    const new_movie_json = req.body.id
    if (id == new_movie_json){
        const new_movie_json = req.body
        data_movie.req = new_movie_json
        moviesController.updateMovie(data_movie)
        res.send(data_movie.res)
    }
    
})

export default app