import {connect } from 'mongoose';
export async function run(): Promise<void> {
    // 4. Connect to MongoDB
    await connect('mongodb://localhost:27017/todoTS');
}  