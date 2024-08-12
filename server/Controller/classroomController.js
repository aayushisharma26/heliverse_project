import Classroom from '../Model/classroomSchema.js';
import User from '../Model/userSchema.js';


const createClassroom = async (req, res) => {
  const { name, startTime, endTime, days, teacherId } = req.body;

  try {
    const teacher = await User.findById(teacherId);
    if (!teacher || teacher.role !== 'Teacher') {
      return res.status(400).json({ message: 'Invalid teacher' });
    }

    const classroom = await Classroom.create({
      name,
      startTime,
      endTime,
      days,
      teacher: teacher._id,
    });

    teacher.classroom = classroom._id;
    await teacher.save();

    res.status(201).json(classroom);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find().populate('teacher students');
    res.json(classrooms);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export { createClassroom, getClassrooms }






