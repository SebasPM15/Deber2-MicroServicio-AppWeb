-- La tabla tbl_song será creada en la base de datos BDD_PoliMusic_Song
-- que se especifica en el docker-compose.yml

-- Creamos la tabla si no existe
CREATE TABLE IF NOT EXISTS public.tbl_song (
    id_song SERIAL NOT NULL,
    song_name VARCHAR(50) NOT NULL,
    song_path VARCHAR(255) NOT NULL,
    plays INTEGER,
    CONSTRAINT pk_tbl_song PRIMARY KEY (id_song)
);

-- Poblamos la tabla con los datos del nuevo script
INSERT INTO public.tbl_song (SONG_NAME, SONG_PATH) VALUES
('Adventure', '../songFiles/bensound-adventure.mp3'),
('Buddy', '../songFiles/bensound-buddy.mp3'),
('Dance', '../songFiles/bensound-dance.mp3'),
('Dreams', '../songFiles/bensound-dreams.mp3'),
('Energy', '../songFiles/bensound-energy.mp3');

-- Opcional: Imprime un mensaje en los logs de Docker para confirmar la ejecución
DO $$ BEGIN
    RAISE NOTICE 'Tabla tbl_song creada y poblada exitosamente.';
END $$;