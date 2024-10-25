import { Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent 
implements OnInit, OnDestroy {
  title = 'portfolio';
  @ViewChildren('cursor') cursorElements!: QueryList<ElementRef>;

  private isDown: boolean = false;
  private startX: number = 0;
  private speedDrag: number = 1; // Adjust as needed
  private progress: number = 0;

  // Event listener references for cleanup
  private listeners: (() => void)[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialize event listeners
    this.addEventListeners();
  }

  ngOnDestroy(): void {
    // Remove all event listeners to prevent memory leaks
    this.listeners.forEach(unlisten => unlisten());
  }

  /**
   * Adds all necessary event listeners using Renderer2
   */
  private addEventListeners(): void {
    // Mouse Events
    this.listeners.push(this.renderer.listen('document', 'mousemove', this.handleMouseMove.bind(this)));
    this.listeners.push(this.renderer.listen('document', 'mousedown', this.handleMouseDown.bind(this)));
    this.listeners.push(this.renderer.listen('document', 'mouseup', this.handleMouseUp.bind(this)));

    // Touch Events
    this.listeners.push(this.renderer.listen('document', 'touchmove', this.handleMouseMove.bind(this)));
    this.listeners.push(this.renderer.listen('document', 'touchstart', this.handleMouseDown.bind(this)));
    this.listeners.push(this.renderer.listen('document', 'touchend', this.handleMouseUp.bind(this)));

    // Wheel Event (assuming handleWheel is defined)
    // Uncomment if handleWheel is implemented
    // this.listeners.push(this.renderer.listen('document', 'mousewheel', this.handleWheel.bind(this)));
  }

  /**
   * Type guard to check if the event is a TouchEvent
   * @param event - MouseEvent or TouchEvent
   */
  private isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent {
    return (event as TouchEvent).touches !== undefined;
  }

  /**
   * Handles mouse and touch move events
   * @param event - MouseEvent or TouchEvent
   */
  private handleMouseMove(event: MouseEvent | TouchEvent): void {
    let clientX: number;
    let clientY: number;

    if (this.isTouchEvent(event)) {
      if (event.touches.length === 0) return; // No touch points
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    // Update cursor positions
    this.cursorElements.forEach($cursor => {
      this.renderer.setStyle($cursor.nativeElement, 'transform', `translate(${clientX}px, ${clientY}px)`);
    });

    // Handle dragging logic
    if (!this.isDown) return;

    const mouseProgress = (clientX - this.startX) * this.speedDrag;
    this.progress += mouseProgress;
    this.startX = clientX;
    this.animate();
  }

  /**
   * Handles mouse and touch down events
   * @param event - MouseEvent or TouchEvent
   */
  private handleMouseDown(event: MouseEvent | TouchEvent): void {
    this.isDown = true;

    if (this.isTouchEvent(event)) {
      if (event.touches.length === 0) return;
      this.startX = event.touches[0].clientX;
    } else {
      this.startX = event.clientX;
    }
  }

  /**
   * Handles mouse and touch up events
   */
  private handleMouseUp(): void {
    this.isDown = false;
  }

  /**
   * Placeholder for the animate function
   * Implement your animation logic here based on `progress`
   */
  private animate(): void {
    // Example: console.log('Animating with progress:', this.progress);
    // Reset progress if needed
  }

  /**
   * Placeholder for the handleWheel function
   * Implement your wheel handling logic here
   */
  /*
  private handleWheel(event: WheelEvent): void {
    // Implement wheel handling logic
  }
  */
  }
