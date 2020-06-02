const { PORT, FILM_LOCATION } = Deno.env.toObject();

const environment = {
    port: Number(PORT) || 3000,
    filmLocation: FILM_LOCATION || '.'
};

export default environment;
