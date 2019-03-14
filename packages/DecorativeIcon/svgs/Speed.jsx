import React from 'react'
import SVGIcon from '../SVGIcon'

const Speed = props => (
  <SVGIcon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <defs>
        <path
          id="speed-a"
          d="M19.7435402,19.7440299 C15.4740144,24.0135557 8.52638557,24.0135557 4.2558701,19.7440299 C3.40077732,18.8889371 2.72481856,17.922999 2.21215876,16.8957 L7.73760206,16.8957 C8.63426186,16.8957 9.44580825,16.3394938 9.76349897,15.4903392 C10.0802,14.5362773 10.9798289,13.8959474 12.0002,13.8959474 C12.5336433,13.8959474 13.0344268,14.0721124 13.4372309,14.3779268 C13.4590041,14.3997 13.4837464,14.4185041 13.5094784,14.4363186 C13.8410247,14.7094732 14.099334,15.0766485 14.2438289,15.510133 C14.5555814,16.3394938 15.3661381,16.8957 16.2627979,16.8957 L21.7872515,16.8957 C21.2745918,17.922999 20.598633,18.8889371 19.7435402,19.7440299 M19.6980144,9.36910206 C19.5099732,9.12761753 19.1625918,9.08704021 18.9211072,9.27409175 L13.798468,13.2843186 C13.2689835,12.9666278 12.6504268,12.7884835 12.0002,12.7884835 C10.5018082,12.7884835 9.18057113,13.7336381 8.71838557,15.1211845 C8.57092165,15.5140918 8.16811753,15.7882361 7.73760206,15.7882361 L1.73710722,15.7882361 C1.35310722,14.7431227 1.13537526,13.6534732 1.07995258,12.5539268 L3.71154021,12.5539268 C4.01735464,12.5539268 4.26477732,12.3055144 4.26477732,11.9997 C4.26477732,11.6938856 4.01735464,11.4464629 3.71154021,11.4464629 L1.07995258,11.4464629 C1.20267423,9.00291649 2.13694227,6.59994742 3.88374639,4.66807113 L5.76613814,6.55046289 C5.87500412,6.65833918 6.0165299,6.71277216 6.15805567,6.71277216 C6.30057113,6.71277216 6.44209691,6.65833918 6.5499732,6.55046289 C6.76671546,6.33372062 6.76671546,5.9833701 6.5499732,5.76662784 L4.66758144,3.88423608 C6.60044742,2.13743196 9.0024268,1.20316392 11.4459732,1.08044227 L11.4459732,3.71104021 C11.4459732,4.01685464 11.6943856,4.26526701 12.0002,4.26526701 C12.3060144,4.26526701 12.5534371,4.01685464 12.5534371,3.71104021 L12.5534371,1.08044227 C14.9969835,1.20316392 17.3999526,2.13743196 19.3318289,3.88522577 L17.5296021,5.68745258 C17.3128598,5.90419485 17.3128598,6.25553505 17.5296021,6.47128763 C17.6374784,6.58015361 17.7790041,6.63359691 17.9205299,6.63359691 C18.0630454,6.63359691 18.2035814,6.58015361 18.3124474,6.47128763 L20.1156639,4.66807113 C21.862468,6.59994742 22.7967361,9.00291649 22.9194577,11.4464629 L20.2888598,11.4464629 C19.9820557,11.4464629 19.734633,11.6938856 19.734633,11.9997 C19.734633,12.3055144 19.9820557,12.5539268 20.2888598,12.5539268 L22.9194577,12.5539268 C22.8640351,13.6534732 22.6463031,14.7431227 22.2623031,15.7882361 L16.2627979,15.7882361 C15.8322825,15.7882361 15.4294784,15.5140918 15.2889423,15.1399887 C15.1484062,14.7203598 14.9336433,14.3422979 14.6585093,14.0176794 L19.6030041,10.146999 C19.8454784,9.95796804 19.8880351,9.6105866 19.6980144,9.36910206 M23.9230041,12.2659268 C23.9675402,12.1857619 24.0002,12.0986691 24.0002,11.9997 C24.0002,11.9017206 23.9675402,11.8136381 23.9230041,11.7334732 C23.8566948,8.76539072 22.7037052,5.81809175 20.4442412,3.55862784 C20.4442412,3.55763814 20.4442412,3.55664845 20.4432515,3.55664845 C20.4422619,3.55565876 20.4422619,3.55565876 20.4412722,3.55466907 C18.1808186,1.29619485 15.2335196,0.143205155 12.2664268,0.077885567 C12.1862619,0.0323597938 12.0981794,-0.0003 12.0002,-0.0003 C11.9012309,-0.0003 11.8141381,0.0323597938 11.7339732,0.077885567 C8.76490103,0.143205155 5.81661237,1.29619485 3.55615876,3.55664845 C1.29570515,5.81710206 0.142715464,8.76539072 0.0773958763,11.7344629 C0.0318701031,11.8146278 0.0002,11.9017206 0.0002,11.9997 C0.0002,12.0976794 0.0318701031,12.1857619 0.0773958763,12.2649371 C0.107086598,13.6425866 0.371334021,15.0133082 0.874096907,16.3137619 C0.874096907,16.3236588 0.868158763,16.332566 0.868158763,16.3414732 C0.868158763,16.5067515 0.942385567,16.649267 1.05521031,16.7512052 C1.63516907,18.0912464 2.46255052,19.350133 3.55615876,20.4437412 C5.88391134,22.7724835 8.94205567,23.9353701 12.0002,23.9353701 C15.0583443,23.9353701 18.1145093,22.7724835 20.4432515,20.4437412 C21.5368598,19.350133 22.3632515,18.0922361 22.9432103,16.7521948 C23.0580144,16.6502567 23.1322412,16.5067515 23.1322412,16.3414732 C23.1322412,16.3315763 23.1263031,16.3226691 23.1263031,16.3117825 C23.6280763,15.0123186 23.891334,13.6415969 23.9230041,12.2659268"
        />
      </defs>
      <use fillRule="evenodd" xlinkHref="#speed-a" />
    </svg>
  </SVGIcon>
)

export default Speed
