const songService = require('../services/song.service');

class SongController {
    async getAllSongs(req, res) {
        try {
            const allSongs = await songService.getAll();
            res.status(200).json(allSongs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getSongById(req, res) {
        try {
            const song = await songService.getById(req.params.id);
            if (song) {
                res.status(200).json(song);
            } else {
                res.status(404).json({ message: 'Canción no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createSong(req, res) {
        try {
            const newSong = await songService.create(req.body);
            res.status(201).json(newSong); // 201 Created
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateSong(req, res) {
        try {
            const updatedSong = await songService.update(req.params.id, req.body);
            if (updatedSong) {
                res.status(200).json(updatedSong);
            } else {
                res.status(404).json({ message: 'Canción no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteSong(req, res) {
        try {
            const result = await songService.delete(req.params.id);
            if (result) {
                res.status(200).json({ message: 'Canción eliminada exitosamente' });
            } else {
                res.status(404).json({ message: 'Canción no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

// Exportamos una instancia de la clase
module.exports = new SongController();