"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          airport_id: "83235340-4a91-426d-8e32-a283dc843d21",
          airport_name: "Bandar Udara Internasional Yogyakarta",
          city: "Kulon Progo",
          continent: "Asia",
          iata_code: "YIA",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "f919b7f9-8d34-4127-985c-205b8c7dd7bd",
          airport_name: "Bandar Udara Internasional Kertajati",
          city: "Majalengka",
          continent: "Asia",
          iata_code: "KJT",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "ebc3ecd6-b01f-418f-8f5d-646d56b17a26",
          airport_name: "Bandar Udara Internasional Juanda",
          city: "Sidoarjo",
          continent: "Asia",
          iata_code: "SUB",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "352f9fc8-bd96-48e2-a99a-cc75a4d10e3f",
          airport_name: "Bandar Udara Tjilik Riwut",
          city: "Palangkaraya",
          continent: "Asia",
          iata_code: "PKY",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "fc38bd8c-e41a-4380-8a44-e066c2b0198a",
          airport_name: "Bandar Udara H. Asan",
          city: "Kotawaringin Timur",
          continent: "Asia",
          iata_code: "SMQ",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "5d692a7e-7cd3-4466-87fe-f129ef931aa3",
          airport_name: "Bandar Udara Internasional APT Pranoto",
          city: "Samarinda",
          continent: "Asia",
          iata_code: "AAP",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "ec3b9040-859d-4856-a86f-99903290ceb8",
          airport_name:
            "Bandar Udara Internasional Sultan Aji Muhammad Sulaiman Sepinggan",
          city: "Balikpapan",
          continent: "Asia",
          iata_code: "BPN",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "8bcb5dcc-a4b8-4aab-91bf-ff766e6fc8ef",
          airport_name: "Bandar Udara Internasional Sultan Hasanuddin",
          city: "Makassar",
          continent: "Asia",
          iata_code: "UPG",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "989cad0e-1d14-4e1f-816b-4cf999132968",
          airport_name: "Bandar Udara Internasional Lombok",
          city: "Mataram",
          continent: "Asia",
          iata_code: "LOP",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "3670ded6-a932-4f7b-957c-ad27626a056d",
          airport_name: "Bandar Udara Internasional I Gusti Ngurah Rai",
          city: "Bali",
          continent: "Asia",
          iata_code: "DPS",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "13c32fe1-9fa1-4070-aef9-e9bd7070f4ca",
          airport_name: "Singapore Changi Airport",
          city: "Singapore",
          continent: "Asia",
          iata_code: "SIN",
          country: "Singapore",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "3f89dbac-c0de-4319-8e42-af315be8510c",
          airport_name: "Suvarnabhumi Airport",
          city: "Prakan",
          continent: "Asia",
          iata_code: "BKK",
          country: "Thailand",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "f22c76ea-a5f7-4c1b-b37f-e559826cf2da",
          airport_name: "Bandara Internasional Soekarno Hatta",
          city: "Jakarta",
          continent: "Asia",
          iata_code: "CGK",
          country: "Indonesia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "73d369ff-36d3-4742-9454-64a50d5daa01",
          airport_name: "Ninoy Aquino International Airport",
          city: "Manila",
          continent: "Asia",
          iata_code: "MNL",
          country: "Philippines",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "63d06581-65fa-4cb2-af5b-3293f5440e5a",
          airport_name: "Kuala Lumpur International Airport",
          city: "Selangor",
          continent: "Asia",
          iata_code: "KUL",
          country: "Malaysia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "ad7f8c59-a78a-4557-9dfa-a9fb674a3097",
          airport_name: "EuroAirport Basel Mulhouse Freiburg",
          city: "Basel",
          continent: "Europe",
          iata_code: "BSL",
          country: "Switzerland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "8700c374-df20-4d92-842f-aaa10f534872",
          airport_name: "Léon-Mba International Airport",
          city: "Libreville",
          continent: "Europe",
          iata_code: "LBV",
          country: "France",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "7c72bf6a-004f-4622-bf0c-f9fc63b4e3af",
          airport_name: "Prince Mohammad bin Abdulaziz International Airport	",
          city: "Medina",
          continent: "Asia",
          iata_code: "MED",
          country: "Saudi Arabia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "6704ad14-5c86-477f-ba2f-6e3db9071b0d",
          airport_name: "Lisbon Airport",
          city: "Lisbon",
          continent: "Europe",
          iata_code: "LOP",
          country: "Portugal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "56c7a841-4826-40c8-93d6-8b08e52c3a52",
          airport_name: "Thunder Bay International Airport",
          city: "Thunder Bay",
          continent: "North America",
          iata_code: "YQT",
          country: "Canada",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "c3ec150b-b848-412d-95d2-d6f1970dc3cd",
          airport_name: "Los Angeles International Airport",
          city: "Los Angeles",
          continent: "North America",
          iata_code: "LAX",
          country: "United States",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "76b892e4-7cd4-4977-9c13-9a3650284fb5",
          airport_name: "Beijing Capital International Airport",
          city: "Beijing",
          continent: "Asia",
          iata_code: "PEK",
          country: "China",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          airport_id: "a06d9c35-8787-46d9-8778-609ff998d4b2",
          airport_name: "Narita International Airport",
          city: "Tokyo",
          continent: "Asia",
          iata_code: "NRT",
          country: "Japan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Airports", null, {});
  },
};
