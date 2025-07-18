module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        id_song: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            // Mapeo explícito al nombre de la columna en la BD
            field: 'id_song'
        },
        song_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
            // Mapeo explícito al nombre de la columna en la BD
            field: 'song_name'
        },
        song_path: {
            type: DataTypes.STRING(255),
            allowNull: false,
            // Mapeo explícito al nombre de la columna en la BD
            field: 'song_path'
        },
        plays: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            // Mapeo explícito al nombre de la columna en la BD
            field: 'plays'
        }
    }, {
        tableName: 'tbl_song',
        timestamps: false,
        schema: 'public'
    });

    return Song;
};