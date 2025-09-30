/**
 * Sample blog posts data for FitFlow exercise blog
 */

import type { BlogPost, Category } from '../types/index';

export const sampleCategories: Category[] = [
  {
    id: '1',
    name: 'Workouts',
    slug: 'workouts',
    color: 'bg-red-500',
    postCount: 8,
  },
  {
    id: '2',
    name: 'Nutrition',
    slug: 'nutrition',
    color: 'bg-green-500',
    postCount: 5,
  },
  {
    id: '3',
    name: 'Motivation',
    slug: 'motivation',
    color: 'bg-purple-500',
    postCount: 4,
  },
  {
    id: '4',
    name: 'Equipment',
    slug: 'equipment',
    color: 'bg-blue-500',
    postCount: 3,
  },
];

export const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10-Minute Full Body HIIT Workout for Beginners',
    slug: '10-minute-full-body-hiit-workout-beginners',
    excerpt:
      'Get fit with this quick and effective HIIT workout that targets all major muscle groups. Perfect for beginners looking to start their fitness journey.',
    content: `# 10-Minute Full Body HIIT Workout for Beginners

Are you ready to kickstart your fitness journey with a quick and effective workout? This 10-minute full-body HIIT (High-Intensity Interval Training) routine is perfect for beginners who want to get fit without spending hours at the gym.

## Why HIIT Works

HIIT workouts are scientifically proven to:
- Burn more calories in less time
- Boost your metabolism for hours after exercise
- Improve cardiovascular health
- Build muscle while burning fat
- Require no equipment

## The Workout Structure

This workout consists of 5 exercises, each performed for 40 seconds with 20 seconds rest between exercises. We'll complete 2 rounds for a total of 10 minutes.

### Exercise 1: Jumping Jacks
Start with your feet together and arms at your sides. Jump your feet out to shoulder-width apart while raising your arms overhead. Jump back to starting position.

### Exercise 2: Bodyweight Squats
Stand with feet shoulder-width apart. Lower your body by bending your knees and pushing your hips back as if sitting in a chair. Keep your chest up and core engaged.

### Exercise 3: Push-ups (Modified if Needed)
Start in a plank position with hands slightly wider than shoulders. Lower your chest to the ground, then push back up. For beginners, perform on your knees.

### Exercise 4: Mountain Climbers
Start in a plank position. Bring one knee toward your chest, then quickly switch legs, creating a running motion.

### Exercise 5: Plank Hold
Hold a plank position on your forearms, keeping your body in a straight line from head to heels. Engage your core throughout.

## Cool Down and Recovery

After completing both rounds, take a few minutes to stretch your major muscle groups. This helps prevent soreness and improves flexibility.

## Tips for Success

1. **Start Slow**: If you're new to exercise, focus on form over speed.
2. **Listen to Your Body**: Take breaks when needed and modify exercises as necessary.
3. **Stay Consistent**: Aim to do this workout 3-4 times per week for best results.
4. **Hydrate**: Drink water before, during, and after your workout.
5. **Track Progress**: Take photos and measurements to monitor your improvements.

## Nutrition Tips

Pair this workout with a balanced diet for optimal results:
- Eat protein within 30 minutes post-workout
- Stay hydrated throughout the day
- Focus on whole foods and lean proteins
- Avoid processed foods and excess sugar

Remember, fitness is a journey, not a destination. Stay consistent, be patient with yourself, and celebrate small victories along the way!`,
    thumbnail: 'https://picsum.photos/2004',
    category: 'Workouts',
    tags: ['HIIT', 'Beginner', 'Full Body', 'No Equipment', '10 Minutes'],
    author: {
      id: '1',
      name: 'Sarah Johnson',
      bio: 'Certified Personal Trainer and Nutrition Coach with 8 years of experience helping people achieve their fitness goals.',
      avatar: 'https://picsum.photos/1002',
      socialLinks: {
        youtube: 'https://youtube.com/fitflow',
        instagram: 'https://instagram.com/fitflow_sarah',
        twitter: 'https://twitter.com/fitflow_sarah',
      },
    },
    publishedAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    readTime: 8,
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    likes: 245,
    comments: [
      {
        id: '1',
        author: 'Mike Chen',
        content:
          "Great workout! I've been doing this 3 times a week and seeing amazing results.",
        createdAt: '2024-01-16T14:30:00Z',
        likes: 12,
      },
      {
        id: '2',
        author: 'Lisa Martinez',
        content:
          'Perfect for beginners like me. The modifications really help!',
        createdAt: '2024-01-17T09:15:00Z',
        likes: 8,
      },
    ],
    isFeatured: true,
  },
  {
    id: '2',
    title: 'The Ultimate Guide to Meal Prep for Fitness Enthusiasts',
    slug: 'ultimate-guide-meal-prep-fitness-enthusiasts',
    excerpt:
      'Learn how to meal prep like a pro with our comprehensive guide. Save time, money, and stay on track with your fitness goals.',
    content: `# The Ultimate Guide to Meal Prep for Fitness Enthusiasts

Meal prepping is a game-changer for anyone serious about their fitness journey. Not only does it save time and money, but it also ensures you always have healthy, nutritious meals ready to fuel your workouts and recovery.

## Benefits of Meal Prepping

### 1. Saves Time
Spend 2-3 hours on Sunday preparing meals for the entire week. No more daily cooking or last-minute unhealthy food choices.

### 2. Saves Money
Buying ingredients in bulk and cooking at home is significantly cheaper than eating out or buying pre-made meals.

### 3. Portion Control
Pre-portioned meals help you maintain proper serving sizes and track your macros more accurately.

### 4. Reduces Stress
Eliminate the daily "what should I eat?" dilemma and reduce decision fatigue.

### 5. Supports Your Fitness Goals
Having healthy meals ready ensures you stay on track with your nutrition plan.

## Essential Meal Prep Tools

Before we dive into the process, let's cover the basic tools you'll need:

- Quality food containers (glass or BPA-free plastic)
- Sharp knives and cutting boards
- Measuring cups and food scale
- Slow cooker or Instant Pot (optional but helpful)
- Baking sheets and mixing bowls
- Labels and markers for dating containers

## Step-by-Step Meal Prep Process

### Step 1: Plan Your Meals
Start by planning your meals for the week. Consider:
- Your workout schedule
- Daily calorie and macro targets
- Foods you enjoy eating
- Seasonal ingredients
- Budget constraints

### Step 2: Create a Shopping List
Based on your meal plan, create a comprehensive shopping list organized by store sections (produce, proteins, grains, etc.).

### Step 3: Shop Smart
- Buy seasonal produce for better prices and flavor
- Purchase proteins in bulk
- Choose versatile ingredients that work in multiple meals
- Don't forget healthy snacks and seasonings

### Step 4: Prep Day Schedule
Here's a typical meal prep timeline:

**Hour 1: Prep and Season**
- Wash and chop vegetables
- Marinate proteins
- Preheat oven and start grains cooking

**Hour 2: Cook Proteins**
- Bake chicken breasts
- Brown ground turkey
- Cook fish or tofu

**Hour 3: Assemble Meals**
- Portion proteins, carbs, and vegetables
- Package meals in containers
- Label with contents and date

## Sample Meal Prep Recipes

### Breakfast Options
1. **Overnight Oats**: Combine oats, protein powder, chia seeds, and almond milk
2. **Egg Muffins**: Bake eggs with vegetables in muffin tins
3. **Greek Yogurt Parfaits**: Layer yogurt, berries, and granola

### Lunch/Dinner Options
1. **Chicken, Rice, and Vegetables**: Season chicken breasts, bake with mixed vegetables
2. **Turkey Meatballs**: Make large batch, serve with zucchini noodles
3. **Salmon and Quinoa**: Bake salmon fillets with roasted vegetables

### Snack Options
1. **Cut vegetables with hummus**
2. **Mixed nuts and seeds**
3. **Protein energy balls**
4. **Fresh fruit portions**

## Storage and Food Safety

### Refrigerator Storage
- Cooked proteins: 3-4 days
- Cooked grains: 5-7 days
- Cut vegetables: 3-5 days
- Prepared salads: 2-3 days

### Freezer Storage
- Cooked proteins: 2-3 months
- Soups and stews: 2-3 months
- Baked goods: 2-3 months

### Safety Tips
- Cool food completely before refrigerating
- Use separate cutting boards for raw meats
- Label everything with dates
- When in doubt, throw it out

## Macro-Friendly Meal Prep Tips

### For Muscle Building
- Focus on higher protein portions
- Include complex carbohydrates
- Add healthy fats for hormone production

### For Fat Loss
- Emphasize protein and vegetables
- Control carbohydrate portions
- Include plenty of fiber

### For Maintenance
- Balance all macronutrients
- Focus on whole foods
- Allow for flexibility

## Common Meal Prep Mistakes to Avoid

1. **Overcomplicating Recipes**: Start simple and build complexity over time
2. **Not Accounting for Preferences**: Prep foods you actually enjoy eating
3. **Improper Storage**: Use proper containers and storage techniques
4. **Forgetting Snacks**: Include healthy snacks in your prep
5. **Not Labeling**: Always label containers with contents and dates
6. **Prepping Too Much**: Start with 3-4 days worth of meals

## Conclusion

Meal prepping is a skill that improves with practice. Start small, stay consistent, and gradually build your meal prep routine. Your future self will thank you for the time and effort you invest in planning and preparing nutritious meals that support your fitness goals.

Remember, the best meal prep plan is the one you can stick to consistently. Find what works for your lifestyle, schedule, and preferences, and make it a sustainable part of your fitness journey.`,
    thumbnail: 'https://picsum.photos/2002',
    category: 'Nutrition',
    tags: [
      'Meal Prep',
      'Nutrition',
      'Fitness',
      'Healthy Eating',
      'Time Saving',
    ],
    author: {
      id: '2',
      name: 'David Rodriguez',
      bio: 'Sports Nutritionist and Meal Prep Expert helping athletes optimize their nutrition for peak performance.',
      avatar: 'https://picsum.photos/1003',
      socialLinks: {
        youtube: 'https://youtube.com/fitflow',
        instagram: 'https://instagram.com/fitflow_david',
        twitter: 'https://twitter.com/fitflow_david',
      },
    },
    publishedAt: '2024-01-12T08:30:00Z',
    updatedAt: '2024-01-12T08:30:00Z',
    readTime: 12,
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    likes: 189,
    comments: [
      {
        id: '3',
        author: 'Jennifer Kim',
        content:
          'This guide completely transformed my meal prep game! So detailed and helpful.',
        createdAt: '2024-01-13T11:45:00Z',
        likes: 15,
      },
    ],
    isFeatured: true,
  },
  {
    id: '3',
    title: '5 Morning Habits That Will Transform Your Fitness Journey',
    slug: '5-morning-habits-transform-fitness-journey',
    excerpt:
      'Start your day right with these powerful morning habits that will set you up for fitness success and improved overall well-being.',
    content: `# 5 Morning Habits That Will Transform Your Fitness Journey

Your morning routine sets the tone for your entire day. By implementing these five powerful habits, you can transform not only your fitness journey but your overall quality of life.

## Habit 1: Wake Up Early (The 5 AM Advantage)

Waking up early gives you a head start on the day and provides uninterrupted time for self-care and fitness activities.

### Benefits:
- Quiet, distraction-free time
- Opportunity for morning workouts
- Time for meal prep and planning
- Improved mental clarity

### How to Start:
- Gradually adjust your wake-up time by 15 minutes each week
- Create a consistent sleep schedule
- Place your alarm across the room
- Have a compelling reason to get up

## Habit 2: Hydrate Immediately

After 7-8 hours of sleep, your body is dehydrated. Drinking water first thing in the morning jumpstarts your metabolism and bodily functions.

### Benefits:
- Boosts metabolism by 24% for 90 minutes
- Helps flush out toxins
- Improves brain function
- Reduces hunger and cravings

### Implementation:
- Keep a water bottle by your bedside
- Drink 16-20 ounces immediately upon waking
- Add lemon for extra benefits and flavor
- Track your water intake throughout the day

## Habit 3: Move Your Body

Morning exercise sets a positive tone and provides numerous benefits that last throughout the day.

### Options:
- **Full Workout**: 30-45 minutes of strength training or cardio
- **Quick HIIT**: 10-15 minutes of high-intensity intervals
- **Yoga/Stretching**: 15-20 minutes of flexibility work
- **Walk**: 20-30 minutes of brisk walking

### Benefits:
- Increased energy levels
- Improved mood through endorphin release
- Better focus and productivity
- Consistent exercise routine
- Better sleep quality

## Habit 4: Practice Mindfulness or Meditation

Taking time for mental wellness is crucial for overall health and fitness success.

### Techniques:
- **Meditation**: 5-10 minutes of focused breathing
- **Gratitude Practice**: Write down 3 things you're grateful for
- **Visualization**: Picture your fitness goals and success
- **Journaling**: Write about your intentions for the day

### Benefits:
- Reduced stress and anxiety
- Improved focus and concentration
- Better emotional regulation
- Enhanced self-awareness
- Improved decision-making

## Habit 5: Plan and Prepare

Taking time to plan your day sets you up for success and helps you stay on track with your fitness goals.

### Planning Activities:
- Review your schedule and commitments
- Plan your meals and workout times
- Set your top 3 priorities for the day
- Prepare your workout clothes and gear
- Review your fitness goals and progress

### Benefits:
- Better time management
- Reduced decision fatigue
- Improved goal achievement
- Less stress and anxiety
- More consistent fitness routine

## Creating Your Morning Routine

### Step 1: Start Small
Don't try to implement all five habits at once. Start with one or two and gradually add more as they become automatic.

### Step 2: Be Consistent
Consistency is key to forming new habits. Try to maintain your routine even on weekends and holidays.

### Step 3: Prepare the Night Before
Set yourself up for success by preparing:
- Workout clothes and gear
- Water bottle
- Healthy breakfast ingredients
- Daily schedule and priorities

### Step 4: Track Your Progress
Use a habit tracker or journal to monitor your consistency and celebrate small wins.

### Step 5: Be Flexible
Life happens, and sometimes your routine will be disrupted. Be kind to yourself and get back on track as soon as possible.

## Sample Morning Routine Timeline

**5:00 AM** - Wake up and drink water
**5:05 AM** - Bathroom and brush teeth
**5:10 AM** - 10-minute meditation or gratitude practice
**5:20 AM** - 30-minute workout
**5:50 AM** - Cool down and stretch
**6:00 AM** - Shower and get ready
**6:20 AM** - Healthy breakfast
**6:40 AM** - Plan day and review goals
**7:00 AM** - Start your day!

## Overcoming Common Challenges

### "I'm not a morning person"
Start by waking up just 15 minutes earlier and gradually adjust. Your body will adapt over time.

### "I don't have time"
Prepare as much as possible the night before and start with just 5-10 minutes for each habit.

### "I hit snooze too much"
Place your alarm across the room and have a compelling reason to get out of bed.

### "I forget to do my routine"
Use habit stacking by linking new habits to existing ones, and use reminders or alarms.

## The Compound Effect

These morning habits may seem small individually, but their combined effect over time is transformative. By consistently practicing these habits, you'll:

- Improve your physical fitness
- Enhance mental clarity and focus
- Increase productivity
- Reduce stress and anxiety
- Build confidence and self-discipline
- Create positive momentum for the day

Remember, transformation doesn't happen overnight. Be patient with yourself, stay consistent, and trust the process. Your future self will thank you for starting today.`,
    thumbnail: 'https://picsum.photos/2001',
    category: 'Motivation',
    tags: [
      'Morning Routine',
      'Habits',
      'Productivity',
      'Fitness Tips',
      'Lifestyle',
    ],
    author: {
      id: '3',
      name: 'Emma Thompson',
      bio: 'Lifestyle Coach and Habit Formation Expert helping people create sustainable healthy routines.',
      avatar: 'https://picsum.photos/1004',
      socialLinks: {
        youtube: 'https://youtube.com/fitflow',
        instagram: 'https://instagram.com/fitflow_emma',
        twitter: 'https://twitter.com/fitflow_emma',
      },
    },
    publishedAt: '2024-01-10T06:00:00Z',
    updatedAt: '2024-01-10T06:00:00Z',
    readTime: 10,
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    likes: 312,
    comments: [
      {
        id: '4',
        author: 'Alex Johnson',
        content:
          'These habits have completely changed my life! I wake up at 5 AM every day now.',
        createdAt: '2024-01-11T08:20:00Z',
        likes: 22,
      },
      {
        id: '5',
        author: 'Maria Garcia',
        content:
          'The water tip is so simple but so effective. I feel so much more energized!',
        createdAt: '2024-01-12T07:15:00Z',
        likes: 18,
      },
    ],
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Best Home Gym Equipment Under $100',
    slug: 'best-home-gym-equipment-under-100',
    excerpt:
      'Build an effective home gym without breaking the bank. These affordable equipment pieces will help you achieve your fitness goals at home.',
    content: `# Best Home Gym Equipment Under $100

Creating a home gym doesn't have to be expensive. With just $100, you can purchase versatile equipment that will help you build strength, improve cardiovascular health, and achieve your fitness goals without leaving your house.

## 1. Resistance Bands Set ($20-30)

**Why You Need Them:**
- Extremely versatile and portable
- Perfect for all fitness levels
- Great for strength training and rehabilitation
- Take up minimal space

**Best Exercises:**
- Bicep curls and tricep extensions
- Squats and lunges
- Chest presses and rows
- Glute bridges and kickbacks

**Recommended Brands:** Bodylastics, Black Mountain, or Fit Simplify

## 2. Adjustable Dumbbells ($40-60)

**Why You Need Them:**
- Essential for strength training
- Adjustable weight allows progression
- Compact design saves space
- Versatile for full-body workouts

**Best Exercises:**
- Goblet squats and lunges
- Shoulder presses and lateral raises
- Chest presses and flyes
- Bicep curls and tricep kickbacks

**Budget Tip:** Look for used dumbbells on Facebook Marketplace or Craigslist

## 3. Jump Rope ($10-15)

**Why You Need It:**
- Excellent cardio workout
- Burns calories efficiently
- Improves coordination and agility
- Extremely portable

**Benefits:**
- Burns 200+ calories in 15 minutes
- Improves cardiovascular health
- Strengthens bones
- Enhances footwork and balance

## 4. Yoga Mat ($15-25)

**Why You Need It:**
- Provides cushioning for floor exercises
- Non-slip surface for safety
- Essential for yoga and stretching
- Protects floors and equipment

**Best Uses:**
- Core workouts and planks
- Yoga and Pilates
- Stretching and foam rolling
- Bodyweight exercises

**Recommended Brands:** Gaiam, Manduka, or Amazon Basics

## 5. Foam Roller ($15-25)

**Why You Need It:**
- Aids in muscle recovery
- Reduces muscle soreness
- Improves flexibility
- Prevents injuries

**Benefits:**
- Releases muscle tension
- Improves blood circulation
- Enhances range of motion
- Reduces post-workout soreness

## Sample Budget Home Gym Setup

### Option 1: Total Body Strength Focus ($95)
- Resistance bands set: $25
- Adjustable dumbbells: $50
- Yoga mat: $20

### Option 2: Cardio + Strength Focus ($90)
- Jump rope: $12
- Resistance bands: $25
- Adjustable dumbbells: $40
- Yoga mat: $18

### Option 3: Recovery + Flexibility Focus ($85)
- Resistance bands: $25
- Yoga mat: $20
- Foam roller: $20
- Jump rope: $12
- Light dumbbells: $25

## Full-Body Workout Using Budget Equipment

### Warm-up (5 minutes)
- Jump rope: 2 minutes
- Arm circles and leg swings: 1 minute
- Bodyweight squats: 1 minute
- Light stretching: 1 minute

### Strength Circuit (20 minutes)
**Round 1 (Repeat 3 times):**
- Dumbbell squats: 12 reps
- Resistance band rows: 15 reps
- Push-ups: 10-15 reps
- Dumbbell shoulder press: 12 reps

**Round 2 (Repeat 3 times):**
- Resistance band bicep curls: 15 reps
- Dumbbell lunges: 10 reps each leg
- Resistance band chest press: 15 reps
- Plank hold: 30-60 seconds

### Cardio Finisher (10 minutes)
- Jump rope intervals: 30 seconds on, 30 seconds off, repeat 10 times

### Cool-down (5 minutes)
- Light stretching on yoga mat
- Foam rolling major muscle groups

## Maximizing Your Budget Equipment

### 1. Get Creative with Exercises
Research different exercises for each piece of equipment. YouTube and fitness apps offer countless workout ideas.

### 2. Progressive Overload
Gradually increase reps, sets, or resistance to continue challenging your muscles.

### 3. Combine Equipment
Use multiple pieces together for compound exercises and circuit training.

### 4. Track Your Progress
Keep a workout journal to monitor improvements and stay motivated.

### 5. Maintain Your Equipment
Clean and store equipment properly to extend its lifespan.

## When to Upgrade

As you progress in your fitness journey, consider upgrading when:
- You've mastered basic exercises
- You need heavier weights
- You want more variety
- Your fitness goals change
- You have a larger budget

## Budget-Friendly Shopping Tips

### 1. Buy Used Equipment
Check Facebook Marketplace, Craigslist, garage sales, and thrift stores.

### 2. Shop Sales and Clearance
Watch for sales at sporting goods stores and online retailers.

### 3. Start with Basics
Begin with one or two pieces and add more over time.

### 4. Multi-purpose Equipment
Choose items that serve multiple functions.

### 5. Quality Over Quantity
Invest in a few quality pieces rather than many cheap ones.

## Conclusion

Building a home gym on a $100 budget is not only possible but can be highly effective. With just a few carefully chosen pieces of equipment, you can create challenging, varied workouts that help you achieve your fitness goals. Remember, consistency and proper form are more important than expensive equipment. Start with these basics, stay committed to your routine, and gradually expand your home gym as your fitness journey progresses.

The key to success is not the equipment you have, but how consistently you use it. Start today, stay consistent, and watch your fitness improve from the comfort of your own home!`,
    thumbnail: 'https://picsum.photos/2005',
    category: 'Equipment',
    tags: [
      'Home Gym',
      'Budget',
      'Equipment',
      'Fitness Tips',
      'Strength Training',
    ],
    author: {
      id: '4',
      name: 'Tom Wilson',
      bio: 'Fitness Equipment Specialist and Home Gym Designer with expertise in creating effective workout spaces on any budget.',
      avatar: 'https://picsum.photos/1001',
      socialLinks: {
        youtube: 'https://youtube.com/fitflow',
        instagram: 'https://instagram.com/fitflow_tom',
        twitter: 'https://twitter.com/fitflow_tom',
      },
    },
    publishedAt: '2024-01-08T12:00:00Z',
    updatedAt: '2024-01-08T12:00:00Z',
    readTime: 9,
    youtubeUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    likes: 156,
    comments: [
      {
        id: '6',
        author: 'Chris Brown',
        content:
          "Great recommendations! I started with resistance bands and they're incredibly versatile.",
        createdAt: '2024-01-09T15:30:00Z',
        likes: 9,
      },
    ],
    isFeatured: false,
  },
];
