import React, { useState } from 'react';

function ToDo() {
    const [task, setTask] = useState(["Pass the Case", "Join the Cosmos",'Go to School', 'Take to Bus', 'Buy the Medicane']);
    const [text, setText] = useState("");
    const [completedTasks, setCompletedTasks] = useState([]);

    const InputChange = (event) => {
        setText(event.target.value);
    };

    const handleAddButton = () => {
        // input boş değil ise Task arrayine inputtan gelen değeri ekler ve eski verileri de tutar 
        // eğer input boş ise kullanıcıya uyarı verir
        if (text.trim() !== "") {
            setTask((prevDuties) => [text, ...prevDuties]);   
            setText("");
        } else {
            alert("Please Enter Task")
        }
    };

    const handleDeleteButton = (index) => {
        const updatedDuties = task.filter((item, i) => i !== index);
        setTask(updatedDuties);
    };

   // Görevin tamamlanma durumunu değiştiren fonksiyon
    const handleToggleCompletion = (index) => {
    // Mevcut tamamlanmış görevlerin bir kopyasını oluştur
    const updatedCompletedTasks = [...completedTasks];
    
    // Eğer görev tamamlanmışsa
    if (updatedCompletedTasks.includes(index)) {
        // Tamamlanmış görevler dizisinden bu görevi kaldır
        updatedCompletedTasks.splice(updatedCompletedTasks.indexOf(index), 1);
    } else {
        // Görev tamamlanmamışsa, görevi tamamlanmış görevler dizisine ekle
        updatedCompletedTasks.push(index);
    }
    
    // Tamamlanmış görevlerin güncellenmiş hâlini ayarla ve state'i güncelle
    setCompletedTasks(updatedCompletedTasks);
};

    return (
        <div className='flex justify-center items-center h-screen overflow-hidden'>
            <div className='text-center' style={{ maxHeight: '700px', overflowY: 'auto' }}>
                <h1 className='font-extrabold text-4xl p-6'>To Do App</h1>
                
                <input className='p-1 m-2' placeholder='Input Task...' type='text' value={text} onChange={InputChange} />
                <button className='bg-green-300 rounded-lg p-1' onClick={handleAddButton}>Add</button>
                <ol>
                    {task.map((task, index) => (
                        <li key={index} className='m-6 p-1' style={{ textDecoration: completedTasks.includes(index) ? 'line-through' : 'none' }}>
                            {task}
                            <button className='m-6 p-1' onClick={() => handleDeleteButton(index)}>Delete</button>
                            <button className='m-6 p-1' onClick={() => handleToggleCompletion(index)}>Complete</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default ToDo;
