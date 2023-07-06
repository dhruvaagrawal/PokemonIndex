import time

import requests
from concurrent.futures import ThreadPoolExecutor
from http import HTTPStatus

POKEAPI_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"
MAX_WORKERS = 100
POKEMON_RANGE = range(1, 1500)

pokedex = {}


def fetch_pokemon_details(pokemon_id):
    print(f"Fetching details for ID: {pokemon_id}")
    response = requests.get(f"{POKEAPI_BASE_URL}{pokemon_id}")

    if response.status_code != HTTPStatus.OK:
        return

    json_response = response.json()
    pokemon_name = json_response.get("name")
    pokemon_stats = {
        stat["stat"]["name"]: stat["base_stat"] for stat in json_response["stats"]
    }
    pokedex[pokemon_name] = pokemon_stats
    print(f"Added details for ID: {pokemon_id}, current Pokedex size: {len(pokedex)}")


def calculate_max_stats(pokedex):
    max_stats = {}
    stat_count = {}

    for stats in pokedex.values():
        for stat_name, stat_value in stats.items():
            max_stats[stat_name] = max(max_stats.get(stat_name, 0), stat_value)
            if stat_name not in stat_count.keys():
                stat_count[stat_name] = {}
            if stat_value > 200:
                stat_count[stat_name][">200"] = stat_count[stat_name].get(">200", 0) + 1
            elif stat_value > 100:
                stat_count[stat_name][">100"] = stat_count[stat_name].get(">100", 0) + 1
            else:
                stat_count[stat_name]["<100"] = stat_count[stat_name].get("<100", 0) + 1
    return max_stats, stat_count


def main():
    start_time = time.time()
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        executor.map(fetch_pokemon_details, POKEMON_RANGE)
    print(f"time taken to fetch: {time.time() - start_time}")

    max_stats, stat_count = calculate_max_stats(pokedex)

    print(f"time taken to complete: {time.time() - start_time}")
    print("Max Stats:", max_stats)
    print(f"stat count: {stat_count}")


if __name__ == "__main__":
    main()
