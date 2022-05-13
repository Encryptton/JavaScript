"use strict";
class ParkingFront {
    constructor($, parking = new Parking()) {
        this.$ = $;
        this.parking = parking;
    }
    toAdd(car, save = false) {
        this.parking.toAdd(car);
        const row = document.createElement("tr");
        row.innerHTML = `
                  <td>${car.name}</td>
                  <td>${car.plate}</td>
                  <td data-time="${car.entry}">
                      ${car.entry.toLocaleString("pt-BR", {
            hour: "numeric",
            minute: "numeric",
        })}
                  </td>
                  <td>
                      <button class="delete">x</button>
                  </td>
              `;
        if (save) {
            this.parking.save();
        }
        this.$("#garage").appendChild(row);
    }
    close(cells) {
        if (cells[2] instanceof HTMLElement) {
            const vehicle = {
                name: cells[0].textContent || "",
                plate: cells[1].textContent || "",
                time: new Date().valueOf() -
                    new Date(cells[2].dataset.time).valueOf(),
            };
            this.parking.close(vehicle);
        }
    }
    render() {
        this.$("#garage").innerHTML = "";
        this.parking.courtyard.forEach((c) => this.toAdd(c));
    }
}
class Parking {
    constructor() {
        this.courtyard = localStorage.courtyard ? JSON.parse(localStorage.courtyard) : [];
    }
    toAdd(car) {
        this.courtyard.push(car);
    }
    close(info) {
        const time = this.calcTime(info.time);
        const msg = `
        The vehicle ${info.name} de plate ${info.plate} remained ${time} parked.
        want to leave?
      `;
        if (!confirm(msg))
            return;
        this.courtyard = this.courtyard.filter((car) => car.plate !== info.plate);
        this.save();
    }
    calcTime(mil) {
        var min = Math.floor(mil / 60000);
        var sec = Math.floor((mil % 60000) / 1000);
        return `${min}m e ${sec}s`;
    }
    save() {
        console.log("Saving...");
        localStorage.courtyard = JSON.stringify(this.courtyard);
    }
}
(function () {
    const $ = (q) => {
        const elem = document.querySelector(q);
        if (!elem)
            throw new Error("An error occurred while fetching the element.");
        return elem;
    };
    const parking = new ParkingFront($);
    parking.render();
    $("#send").addEventListener("click", () => {
        const name = $("#name").value;
        const plate = $("#licence").value;
        if (!name || !plate) {
            alert("Fields are mandatory.");
            return;
        }
        const car = { name, plate, entry: new Date().toISOString() };
        parking.toAdd(car, true);
        $("#name").value = "";
        $("#licence").value = "";
    });
    $("#garage").addEventListener("click", ({ target }) => {
        if (target.className === "delete") {
            parking.close(target.parentElement.parentElement.cells);
            parking.render();
        }
    });
})();
