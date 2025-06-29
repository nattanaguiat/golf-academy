import mongoose from 'mongoose'
import dotenv from "dotenv"
import { Coach } from '../models/Coach.model.js'

dotenv.config()


const coaches = [
    {
      name: "Nattan Aguia",
      email: "nattan@golfclub.com",
      bio: "Passionate golf coach with a focus on short game precision and mental strategy. Helping players improve one swing at a time.",
      photoUrl: "https://i.imgur.com/1uD6iCl.jpg"
    },
    {
      name: "Samantha Reed",
      email: "samantha@golfclub.com",
      bio: "Former LPGA player with 8+ years of coaching experience. Specializes in putting and course management for competitive players.",
      photoUrl: "https://i.imgur.com/bDCjZfS.jpg"
    },
    {
      name: "James O'Connor",
      email: "james@golfclub.com",
      bio: "Certified PGA instructor with a passion for helping beginners build a solid foundation and confidence on the course.",
      photoUrl: "https://i.imgur.com/r0CvLvX.jpg"
    },
    {
      name: "Emily Zhang",
      email: "emily@golfclub.com",
      bio: "Biomechanics expert and swing coach focused on optimizing performance through personalized technique analysis.",
      photoUrl: "https://i.imgur.com/VnXq4SN.jpg"
    },
    {
      name: "Luis Herrera",
      email: "luis@golfclub.com",
      bio: "Youth program director with a dynamic and energetic approach to golf instruction for kids and teens.",
      photoUrl: "https://i.imgur.com/cKjXcXO.jpg"
    }
  ];

  const seedCoaches = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      await Coach.deleteMany();
      await Coach.insertMany(coaches);
      console.log("✅ Coaches insertados correctamente");
      process.exit();
    } catch (err) {
      console.error("❌ Error insertando coaches:", err);
      process.exit(1);
    }
  }

  seedCoaches()