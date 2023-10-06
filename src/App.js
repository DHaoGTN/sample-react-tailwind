import logo from './logo.svg';
import './App.css';
import MyCalendar from './components/MyCalendar';
import Attendance from './components/Attendance';
import MyContact from './components/MyContact';
import MyContactForm from './components/MyContactForm';
import ServiceIntroduce from './components/ServiceIntroduce';
import AttendanceApp from './components/AttendanceApp';
import Calculator from './components/Calculator';
import Header from './components/Header';

function App() {
  return (
    <div>
      <div className="bg-gray-100">
        <Header />
        <main>
          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              {/* Add your main content here */}
              <AttendanceApp />
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="container mx-auto px-4">
            {/* Add your footer content here */}
            <p className="text-center text-gray-600">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
    // <div className="Atd01 w-[1200px] h-[982px] relative bg-white">
    //   <div className="SectionNavbar1 w-[1200px] h-[72px] left-0 top-0 absolute bg-gray-50">
    //     <div className="Contact w-[60px] h-6 left-[1091px] top-[24px] absolute text-black text-[14px] font-normal leading-normal">Menu</div>
    //     <img className="Screenshot20230705At13441 w-[75px] h-[33px] left-[71px] top-[16px] absolute" src="https://via.placeholder.com/75x33" />
    //     <div className="AttendanceSystem left-[198px] top-[20px] absolute text-black text-[22px] font-normal leading-normal">Attendance System</div>
    //   </div>
    //   <div className="TextInputs h-[108px] left-[303px] top-[371px] absolute flex-col justify-start items-start gap-2 inline-flex">
    //     <div className="InputTextLabel self-stretch text-stone-500 text-[12px] font-semibold leading-none">Input Text Label</div>
    //     <div className="InputField self-stretch h-14 p-4 bg-white rounded-lg border border border border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
    //       <div className="Text self-stretch justify-between items-start gap-2 inline-flex">
    //         <div className="TypeHere w-[304px] text-stone-500 text-[16px] font-normal leading-normal">Type here</div>
    //         <div className="Icon w-6 h-6 relative opacity-0" />
    //       </div>
    //     </div>
    //     <div className="AssistiveText self-stretch text-stone-500 text-[12px] font-normal leading-none">Assistive Text</div>
    //   </div>
    //   <img className="1 w-[29px] h-7 left-[1137px] top-[21px] absolute" src="https://via.placeholder.com/29x28" />
    // </div>
  );
}

export default App;
