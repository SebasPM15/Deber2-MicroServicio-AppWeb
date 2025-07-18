const { songs } = require('../models'); // Importa el modelo desde el index de modelos

class SongService {
    // Obtiene todas las canciones de la base de datos
    async getAll() {
        try {
            return await songs.findAll();
        } catch (error) {
            throw new Error('Error al obtener las canciones: ' + error.message);
        }
    }

    // Obtiene una canción por su ID (clave primaria)
    async getById(id) {
        try {
            return await songs.findByPk(id);
        } catch (error) {
            throw new Error('Error al obtener la canción: ' + error.message);
        }
    }

    // Crea una nueva canción con los datos proporcionados
    async create(songData) {
        try {
            return await songs.create(songData);
        } catch (error) {
            throw new Error('Error al crear la canción: ' + error.message);
        }
    }

    // Actualiza una canción existente por su ID
    async update(id, songData) {
        try {
            // El método update devuelve un array con el número de filas afectadas
            const [updated] = await songs.update(songData, { where: { ID_SONG: id } });
            if (updated) {
                // Si se actualizó, devuelve la canción actualizada
                return await this.getById(id);
            }
            return null; // Si no se encontró, devuelve null
        } catch (error) {
            throw new Error('Error al actualizar la canción: ' + error.message);
        }
    }

    // Elimina una canción por su ID
    async delete(id) {
        try {
            // El método destroy devuelve el número de filas eliminadas
            return await songs.destroy({ where: { ID_SONG: id } });
        } catch (error) {
            throw new Error('Error al eliminar la canción: ' + error.message);
        }
    }
}

// Exportamos una instancia de la clase para usarla como singleton
module.exports = new SongService();