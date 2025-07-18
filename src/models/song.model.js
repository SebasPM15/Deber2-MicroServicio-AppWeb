module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define(
        'Song',
        {
            id_song: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            song_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            song_path: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            plays: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
        },
        {
            tableName: 'tbl_song', // Nombre exacto en minúsculas
            timestamps: false, // Sin columnas createdAt/updatedAt
        }
    );
    return Song;
};