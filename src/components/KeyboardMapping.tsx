import { KeyboardSection } from './KeyboardSection';
import { generalMappings, inputMethodMappings } from '../data/mappings';

function KeyboardMapping() {
  return (
    <div className="space-y-8">
      <KeyboardSection 
        title="一般按鍵對照" 
        mappings={generalMappings} 
      />
      <KeyboardSection 
        title="中文輸入法快速鍵" 
        mappings={inputMethodMappings} 
      />
    </div>
  );
}

export default KeyboardMapping;