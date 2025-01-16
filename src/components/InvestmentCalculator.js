import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  Typography, 
  Box,
  Slider,
  Paper,
  Grid
} from '@mui/material';
import { useState } from 'react';

function InvestmentCalculator({ open, onClose }) {
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [investmentTerm, setInvestmentTerm] = useState(3); // Default 3 months
  
  const calculateReturn = () => {
    // Annual return rate (12%)
    const annualRate = 0.12;
    
    // Convert to monthly rate
    const monthlyRate = annualRate / 12;
    
    // Calculate return for the term in months
    const returnRate = monthlyRate * investmentTerm;
    const returnAmount = investmentAmount * returnRate;
    const totalReturn = investmentAmount + returnAmount;
    
    // Calculate effective annual rate
    const effectiveAnnualRate = (Math.pow(1 + monthlyRate, 12) - 1) * 100;
    
    return {
      returnAmount: returnAmount.toFixed(2),
      totalReturn: totalReturn.toFixed(2),
      monthlyRate: (monthlyRate * 100).toFixed(1),
      annualizedReturn: effectiveAnnualRate.toFixed(1)
    };
  };

  const results = calculateReturn();

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>
        <Typography 
          variant="h5" 
          sx={{ 
            fontWeight: 700,
            color: '#2E7D32',
            mb: 1
          }}
        >
          Calculate Your Investment Returns
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Investment Amount
          </Typography>
          <TextField
            fullWidth
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(Number(e.target.value))}
            type="number"
            InputProps={{
              startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>
            }}
            sx={{ mb: 3 }}
          />

          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
            Investment Term (Months)
          </Typography>
          <Slider
            value={investmentTerm}
            onChange={(e, newValue) => setInvestmentTerm(newValue)}
            min={1}
            max={12}
            step={1}
            marks={[
              { value: 1, label: '1' },
              { value: 3, label: '3' },
              { value: 6, label: '6' },
              { value: 9, label: '9' },
              { value: 12, label: '12' }
            ]}
            sx={{ mb: 4 }}
          />

          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              bgcolor: 'rgba(46,125,50,0.05)',
              borderRadius: 2
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              Estimated Returns
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography color="text.secondary">Investment Amount:</Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    ${investmentAmount.toFixed(2)}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography color="text.secondary">Monthly Return Rate:</Typography>
                  <Typography variant="subtitle1" fontWeight={600} color="primary">
                    {results.monthlyRate}%
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography color="text.secondary">Return Amount:</Typography>
                  <Typography variant="subtitle1" fontWeight={600} color="primary">
                    ${results.returnAmount}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography color="text.secondary">Total Return:</Typography>
                  <Typography variant="h6" fontWeight={600} color="primary">
                    ${results.totalReturn}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary">Annual Return Rate:</Typography>
                  <Typography variant="h6" fontWeight={600} color="primary">
                    {results.annualizedReturn}%
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Typography 
            variant="caption" 
            color="text.secondary" 
            sx={{ 
              display: 'block', 
              mt: 2, 
              textAlign: 'center' 
            }}
          >
            *Returns are estimated based on historical performance. Actual returns may vary.
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button 
          variant="contained"
          onClick={() => window.location.href = '/register/investor'}
          sx={{
            bgcolor: '#2E7D32',
            '&:hover': {
              bgcolor: '#1B5E20'
            }
          }}
        >
          Start Investing
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default InvestmentCalculator; 