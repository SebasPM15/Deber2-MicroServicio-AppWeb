const express = require('express');
const router = express.Router();
const songController = require('../controllers/song.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Song:
 *       type: object
 *       required:
 *         - SONG_NAME
 *         - SONG_PATH
 *       properties:
 *         ID_SONG:
 *           type: integer
 *           description: El ID autogenerado de la canción.
 *         SONG_NAME:
 *           type: string
 *           description: El nombre de la canción.
 *         SONG_PATH:
 *           type: string
 *           description: La ruta o URL del archivo de la canción.
 *         PLAYS:
 *           type: integer
 *           description: El número de reproducciones.
 *       example:
 *         ID_SONG: 1
 *         SONG_NAME: "Adventure"
 *         SONG_PATH: "../songFiles/bensound-adventure.mp3"
 *         PLAYS: 10
 *   tags:
 *     - name: Songs
 *       description: API para la gestión de canciones
 *
 * /api/songs:
 *   get:
 *     summary: Retorna la lista de todas las canciones
 *     tags: [Songs]
 *     responses:
 *       200:
 *         description: La lista de canciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Song'
 *   post:
 *     summary: Crea una nueva canción
 *     tags: [Songs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Song'
 *     responses:
 *       201:
 *         description: La canción fue creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Song'
 *       500:
 *         description: Ocurrió un error en el servidor
 *
 * /api/songs/{id}:
 *   get:
 *     summary: Obtiene una canción por su ID
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la canción
 *     responses:
 *       200:
 *         description: La descripción de la canción por ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Song'
 *       404:
 *         description: La canción no fue encontrada
 *   put:
 *     summary: Actualiza una canción por su ID
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la canción
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Song'
 *     responses:
 *       200:
 *         description: La canción fue actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Song'
 *       404:
 *         description: La canción no fue encontrada
 *       500:
 *         description: Ocurrió un error en el servidor
 *   delete:
 *     summary: Elimina una canción por su ID
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: El ID de la canción
 *     responses:
 *       200:
 *         description: La canción fue eliminada
 *       404:
 *         description: La canción no fue encontrada
 */

router.get('/', songController.getAllSongs);
router.get('/:id', songController.getSongById);
router.post('/', songController.createSong);
router.put('/:id', songController.updateSong);
router.delete('/:id', songController.deleteSong);

module.exports = router;